To get going:
````
npm install
````
`node proxy.js` will launch the proxy server. If you have the [openfin cli](https://github.com/openfin/openfin-cli) installed you can then run 
````
openfin -l -c public/proxy.json
````
else run an app pointing at `http://localhost:3375/proxy.json`. For example:  
````
C:\Users\xavier\AppData\Local\OpenFin\runtime\8.56.29.54\OpenFin>openfin.exe --config="http://localhost:3375/proxy.json"
````