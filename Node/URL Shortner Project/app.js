import { readFile } from "fs/promises";
import { createServer } from "http";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 3002;

const serveFile = async (res, filePath, contentType) => {
  try {
    const data = await readFile(filePath);
    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  } catch (error) {
    res.writeHead(404, { "Content-Type": "text/html" }); 
    res.end("404 page not found");
  }
};

const server = createServer(async (req, res) => {
  console.log(`Request received: ${req.url}`);

  if (req.method === "GET") {
    if (req.url === "/") {
      return serveFile(
        res,
        path.join(__dirname, "public", "index.html"),
        "text/html"
      );
    } else if (req.url === "/style.css") {
      return serveFile(
        res,
        path.join(__dirname, "public", "style.css"),
        "text/css"
      );
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("404 page not found");
    }
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
