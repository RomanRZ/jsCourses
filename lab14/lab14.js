//1
\d+
//2
(\w{2}:){5}\w{2}
//3
ftp:\/\/ftp\d{0,2}\.[a-z]{0,2}\.?FreeBSD\.org\/pub\/FreeBSD\/
//4
\$\.+?\$
//5
\d+\.\d+\.\d+\.\d+
//6
href=("|').+?\1
//7
http(\S)*(\w|\/)
//8
<(h\d).+\1>
//9
\(?\d{3}\)?\W\d{3}\W\d{4}
// 10
[A-Z].+?, [A-Z]([^(\}| )]+)?( [A-Z](\w+)?)?
//11
(?:<[^h][^>]*>|[^<>])+(?=</h\d>)
//12
(?<=\d+\.\s)\w+\,\s([A-Z]\.){1,3}