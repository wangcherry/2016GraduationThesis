// JavaScript Document
function contact(domain, name, tld) {
document.write('<a href=\"mailto:' + name + '@' + domain + '.' + tld + '?subject=Barcoding.com Contact\">')
document.write(name + '@' + domain + '.' + tld + '</' + 'a>')
}