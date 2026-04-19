import os

file_path = r'c:\Users\User\Desktop\film\filmsite-angular\src\app\app.html'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

import re
# Regex to find the src with base64 and replace it
new_content = re.sub(r'src="data:image/[^;]+;base64,[^"]+"', 'src="assets/images/logo.png"', content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)
