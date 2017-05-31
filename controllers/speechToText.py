from audioplay import AudioPlay
# from audiorecord import AudioRecord
import pyaudio
import wave
# from audioanalysis import AudioAnalysis
# from constants import *
from time import sleep
from scipy.io import wavfile


audio_play = AudioPlay()
audio_record = AudioRecord()
audio_analysis = AudioAnalysis()
 
while True:
     
    # girlfriend's question to Arkwood
    # audio_play.text_to_speech("Do you love me")
 
    # record Arkwood's answer
    # voice_file = audio_record.voice()

    CHUNK = 1024
    FORMAT = pyaudio.paInt16
    CHANNELS = 2
    RATE = 44100
    RECORD_SECONDS = 5
    WAVE_OUTPUT_FILENAME = "output.wav"

    p = pyaudio.PyAudio()

    stream = p.open(format=FORMAT,
                    channels=CHANNELS,
                    rate=RATE,
                    input=True,
                    frames_per_buffer=CHUNK)

    print("* recording")

    frames = []

    for i in range(0, int(RATE / CHUNK * RECORD_SECONDS)):
        data = stream.read(CHUNK)
        frames.append(data)

    print("* done recording")

    stream.stop_stream()
    stream.close()
    p.terminate()

    wf = wave.open(WAVE_OUTPUT_FILENAME, 'wb')
    wf.setnchannels(CHANNELS)
    wf.setsampwidth(p.get_sample_size(FORMAT))
    wf.setframerate(RATE)
    wf.writeframes(b''.join(frames))
    wf.close()
 
    # convert Arkwood's answer to text
    answer = audio_analysis.speech_to_text(WAVE_OUTPUT_FILENAME)
    print(answer)
    # girlfriend's emotional outpouring
    # if answer == YES:
    #     audio_play.text_to_speech("I love you")
    # if answer == MAYBE:
    #     audio_play.text_to_speech("Please love me")
    # elif answer == NO:
    #     audio_play.text_to_speech("I hate you")
 
    # give Arkwood a break before nagging him again
    sleep(30)

 
class AudioAnalysis(object):
    LEVEL_THRESHOLD = 0.3 
    SLICE_SIZE = 2205
    MAYBE_PATTERN = [3,2,1]
 
def speech_to_text(self, wave_file):
          
        # read voice file
        rate, data = wavfile.read(wave_file)
        data = data / (2.**15)
  
        # get blob indices and count
        blob_indices = self._blob_indices(data)
        blob_count = len(blob_indices)
 
        # get pattern match
        is_pattern_match = False
        if blob_count == 2:
            is_pattern_match = self._is_pattern_match(data[blob_indices[1]:], self.MAYBE_PATTERN)
 
        # return speech to text
        if blob_count == 1:
            return NO
        elif blob_count == 2 and is_pattern_match:
            return MAYBE
        elif blob_count == 2 and not is_pattern_match:
            return YES
        else:
            return ""
def _blob_indices(self, data):
 
        # initalize variables
        data_len = len(data)
        start_pos = 0
        end_pos = 0
        is_blob = False
        blob_indices = []
    
        # ignore silence before word 
        for idx, val in enumerate(data):
            if val > self.LEVEL_THRESHOLD:
                end_pos = idx
                break
    
        # loop through our data, a slice at a time
        while True:
                
            # index the next slice 
            start_pos = end_pos
            end_pos += self.SLICE_SIZE
    
            # bail out if no more slices
            if end_pos > data_len:
                break
    
            # get top peak in slice
            slice = data[start_pos:end_pos]
            top_peak = np.amax(slice) 
                
            # get top peak at left of slice            
            left_slice = data[(start_pos - (self.SLICE_SIZE/2)) : (start_pos - 100)]
            left_top_peak = np.amax(left_slice) 
    
            # determine if blob detected
            blob_detected = top_peak > self.LEVEL_THRESHOLD and left_top_peak > self.LEVEL_THRESHOLD
    
            # if blob detected, increment the blob count
            if blob_detected and is_blob == False:
                blob_indices.append(start_pos)
                is_blob = True
            elif not blob_detected and is_blob == True:
                is_blob = False
    
        # return blob indices
        return blob_indices

def _is_pattern_match(self, data, pattern):
            
        # initalize variables
        data_len = len(data)
        start_pos = 0
        end_pos = 0
        blob_pattern = []
    
        # loop through our data, a slice at a time
        while True:
                
            # index the next slice 
            start_pos = end_pos
            end_pos += self.SLICE_SIZE
    
            # bail out if no more slices
            if end_pos > data_len:
                break
    
            # update blob pattern with top peak in slice
            top_peak = np.amax(data[start_pos:end_pos])
            blob_pattern.append(int(top_peak*10))
    
        # return true if pattern found in blob, otherwise false
        return ''.join(map(str, pattern)) in ''.join(map(str, blob_pattern))

# constants
YES = "yes"
NO = "no"
MAYBE = "maybe"