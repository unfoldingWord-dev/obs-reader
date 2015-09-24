# Deprecated

The relevant bits of this code have been moved into the unfoldingWord website code (https://github.com/unfoldingWord/unfoldingWord.github.io).  Whatever is here may or may not work, it is no longer maintained ;)

# obs-reader
Reads API endpoint and displays published versions of OBS

place the files in a web enabled folder (vhost, virtual directory etc.)
load the obs-reader.html - this is the javascript version
it reads from a local copy of the obs-catalog.json
modify the obs-reader.html file to try it with the production version of the file using the published endpoint
but only if the reader file is on the same host as the service as cross domain is not supported

PHP version is in the works.
--rob
