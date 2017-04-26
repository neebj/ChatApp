## compute_input.py

import sys, json
#import nltk
#Read data from stdin
def read_in():
    lines = sys.stdin.readlines()
    print(lines)
    # Since our input would only be having one line, parse our JSON data from that
    return json.loads(lines[0])

def main():
    print("Hello World")
    # #get our data as an array from read_in()
    # from nltk.tokenize import word_tokenize
    # from nltk.corpus import stopwords
    # #from nltk.tag import StanfordNERTagger
    # lines = read_in()
    # tokens = word_tokenize(lines)
    # stop_words = set(stopwords.words('english'))
    # clean_tokens = [w for w in tokens if not w in stop_words]
    # tagged = nltk.pos_tag(clean_tokens)
    # # st = StanfordNERTagger('./controllers/english.all.3class.distsim.crf.ser.gz',
	# # 				   './controllers/stanford-ner.jar',
	# # 				   encoding='utf-8')
    # # classified_text = st.tag(clean_tokens)

    # # print(classified_text)                   
    # print(nltk.ne_chunk(tagged))
   
# Start process
if __name__ == '__main__':
    main()
