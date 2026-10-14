KATANA STUDIOS — WEBSITE PACKAGE

VIDEO YA LINK KHUD BADALNE KA TARIKA
------------------------------------
Sab videos aur bahar jaane wale social links is file se control hote hain:
`katana-work-videos.js`

Link badalne ke steps:
1. `katana-work-videos.js` ko Notepad ya VS Code me kholo.
2. Neeche diya hua section dhoondo (A, B, C, D, ya E).
3. Apne Google Drive share link ko `driveLink: ''` ke quotes ke andar paste karo.
4. Ctrl+S se save karo aur browser refresh karo.

Example:
driveLink: 'https://drive.google.com/file/d/PASTE_FILE_ID/view?usp=sharing'

Google Drive me video ka Share option kholo, General access ko “Anyone with the link”
aur role ko “Viewer” karo, phir Copy link dabao. Apne browser me link ek baar kholkar
check kar lo ki video play hota hai. Website me link khaali ho to temporary sample chalega.

CONFIG FILE KE SECTIONS
-----------------------
A: Landing page banner video — horizontal (desktop) aur vertical (mobile).
B: What We Do work book — Films, Ads, Social Media aur Production ke 3 video slots each.
C: Film shelf — sabhi 10 volumes ke title, description, poster aur alag Drive link.
D: Katana Studios ke Instagram, X, LinkedIn aur YouTube link slots.
E: “SHE LIVED” film credits ke Instagram profile links.

10 FILMS KE LIYE VIDEO / PREVIEW SET KARNA
------------------------------------------
1. `katana-work-videos.js` me section C — ASHEN PRESS FILM SHELF dhoondo.
2. Jis volume ko update karna hai usi line me uska `driveLink: ''` bharo.
   Film 01 `she-lived` hai; baaki `film-02` se `film-10` tak hain.
3. Film shelf par volume kholo. `Film preview` se open-book style preview aur poster dikhega.
   `Play film` dabane par usi volume ka Drive player khulega.
4. Cover ke liye book ka artwork by default use hota hai. Apna poster lagana ho to image ko
   project ke andar rakho, jaise `assets/posters/film-02.jpg`, aur us volume ke `poster: ''`
   me path paste karo. Poster optional hai.
5. Har volume ke `title` aur `blurb` ko bhi us film ke hisaab se edit kar sakte ho.

Example volume entry:
{ id: 'film-02', title: 'Film 02', blurb: 'Short film description', driveLink: 'https://drive.google.com/file/d/FILE_ID/view', sampleSrc: escapes, poster: 'assets/posters/film-02.jpg' }

Drive par video replace karte waqt same file par Manage versions > Upload new version
use kar sakte ho. Share link same rahega, isliye config me link dobara update nahi karna padega.

SOCIAL LINKS
------------
Section D me apne social profile ka poora URL `url: ''` ke quotes me paste karo.
Social URL slots save hote hain. Kisi page par naya social button/layout add karna ho to
woh alag page change hai.

LOCAL WEBSITE PREVIEW
---------------------
`START FILMS.bat` par double-click karo aur terminal window khuli rehne do. Browser me:
- Landing page: http://127.0.0.1:8000/katana-studio-colorful.html
- Work book: http://127.0.0.1:8000/work.html
- Film shelf: http://127.0.0.1:8000/films.html

Preview band karne ke liye terminal me Ctrl+C dabao. `films.html` ko file par double-click
karke mat kholo; Three.js ke liye local server chahiye.
