import http from "http";
import url from "url";

let items = [];
let idCounter = 1;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname, query } = parsedUrl;

  if (req.method === "POST" && pathname === "/items") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const data = JSON.parse(body);
      if (!data.name) {
        res.writeHead(400);
        return res.end("name not found");
      }
      const item = { id: idCounter++, name: data.name };
      items.push(item);
      res.writeHead(201);
      res.end(JSON.stringify(item));
    });
  } else if (req.method === "GET" && pathname === "/items") {
    res.writeHead(200);
    res.end(JSON.stringify(items));
  } else if (req.method === "PUT" && pathname === "/items") {
    const id = parseInt(query.id);
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const data = JSON.parse(body);
      const item = items.find((it) => it.id === id);
      if (!item) {
        res.writeHead(404);
        return res.end("Item not found");
      }
      if (data.name) item.name = data.name;
      res.writeHead(200);
      res.end(JSON.stringify(item));
    });
  } else if (req.method === "DELETE" && pathname === "/items") {
    const id = parseInt(query.id);
    const index = items.findIndex((it) => it.id === id);
    if (index === -1) {
      res.writeHead(404);
      return res.end("Item not found");
    }
    const deleted = items.splice(index, 1)[0];
    res.writeHead(200);
    res.end(JSON.stringify(deleted));
  } else {
    res.writeHead(404);
    res.end("Page not found");
  }
});

server.listen(3000, () => {
  console.log("Hi there from port 3000");
});
