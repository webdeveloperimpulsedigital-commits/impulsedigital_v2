import sys
try:
    import docx
except ImportError:
    print("python-docx not installed")
    sys.exit(1)

def extract_text(filename):
    doc = docx.Document(filename)
    for para in doc.paragraphs:
        if para.text.strip():
            print(para.text)

if __name__ == "__main__":
    extract_text(sys.argv[1])
