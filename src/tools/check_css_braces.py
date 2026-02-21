import os

any_problems = False
for root, dirs, files in os.walk('src'):
    for file in files:
        if not file.endswith('.css'):
            continue
        path = os.path.join(root, file)
        with open(path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        opens = 0
        closes = 0
        for i, l in enumerate(lines):
            opens += l.count('{')
            closes += l.count('}')
            if closes > opens:
                print(f'MISMATCH_EXTRA_CLOSE: {path}:{i+1} closes={closes} opens={opens}')
                any_problems = True
                break
        if not any_problems and opens != closes:
            print(f'MISMATCH_END: {path} opens={opens} closes={closes} (difference={opens-closes})')
            any_problems = True

if not any_problems:
    print('OK: All CSS files balanced')
