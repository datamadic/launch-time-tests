FROM node
WORKDIR /app

COPY ./proxy.js /app
COPY ./package.json /app
ADD ./public /app/public
RUN npm install 
EXPOSE 80
EXPOSE 3375
EXPOSE 8080
# CMD node
CMD npm root  
# /app/node_modules

CMD pwd 
CMD cat proxy.js
CMD ls -la 
CMD ls public && node proxy.js