FROM node:latest

RUN mkdir -p /app
RUN echo 'FSEC{r3curs1ion_4nd_0bj3ts_b4d}' > /flag

WORKDIR /app

COPY ./app /app

# Debugging steps
RUN ls -la /app
RUN cat /app/package.json

RUN npm install

EXPOSE 8001

CMD ["npm", "start"]
