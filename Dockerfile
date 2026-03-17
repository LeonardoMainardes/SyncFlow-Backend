FROM oven/bun:1

WORKDIR /app

COPY . .

RUN bun install

EXPOSE 8888

CMD ["bun", "run", "dev"]
