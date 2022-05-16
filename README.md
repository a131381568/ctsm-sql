# CTSM SQL
CTSM-SQL 為 Catch the stars 的後端系統，包括 Apollo Express、PostgreSQL、Nginx 和 Docker 配置。

## 一、簡述（Description）
- /backend 內的資料，為 [Catch the stars](https://github.com/a131381568/catching-the-star-master) 的後端原始程式。
- /frontend 放置[Catch the stars](https://github.com/a131381568/catching-the-star-master)打包後的檔案。
- /nginx 主要作為 docker 佈署後的路由導向內部 port 的配置。

## 二、使用技術及套件（NPM）
- Apollo 相關，Apollo Server 為 GraphQL 架構支援 NodeJS 的工具：
  + apollo-server-express
  + apollo-server-core
  + graphql
  + graphql-tools
  + graphql-upload
- 後端伺服器
  + express
  + stream-promise
  + http
  + https
- JWT 相關
  + jsonwebtoken - 能夠快速製作符合 JSON Web Token 的驗證資料。
  + bcrypt - 將明碼加密的工具。
- 環境變數相關
  + cross-env - 解決跨系統時，環境變數的問題。
  + dotenv - 可在一開始載入所有環境變數。
- 資料庫相關
  + knex
  + pg-promise
- aws-sdk

## 三、登入邏輯圖（Login Logic）
![登入邏輯圖](https://raw.githubusercontent.com/a131381568/catching-the-star-master/main/doc/images/01-login-logic.gif)

## 四、資料表關係（Data Sheet）
![資料表介紹](https://raw.githubusercontent.com/a131381568/catching-the-star-master/main/doc/images/04-data-sheet.gif)

## 五、本機開發 API（Apollo Server API）
1. 確定連接資料庫 /backend/psql/adapter 的環境變數都有設置好，本地端已開啟 Postgres 的 Server。
2. 運行 Apollo Server：
```shell
# 進入後端目錄
cd .\backend\
# 安裝 node 依賴
npm install
# 本機運行
npm run dev
# 顯示 Now browse to http://localhost:4000/graphql
```
3. 瀏覽器進入 [http://localhost:4000/graphql](http://localhost:4000/graphql)，可在 CodeSandbox 的介面進行 query 和 mutation。

- 請求 postid 為 4885 的文章：
![CodeSandbox](https://raw.githubusercontent.com/a131381568/catching-the-star-master/main/doc/images/08-apollographql-sanbox.jpg)

- Query
![query](https://raw.githubusercontent.com/a131381568/catching-the-star-master/main/doc/images/09-graphql-query.jpg)

- Mutation
![mutation](https://raw.githubusercontent.com/a131381568/catching-the-star-master/main/doc/images/10-graphql-mutation.jpg)

- 新增 Query 和 Mutation 的詳細設定，需在 /backend/psql/resolver 進行撰寫，並在 /backend/psql/schema 進行設定。

## 六、Docker 部署（Deploy）
容器架構為：
![docker-setting](https://raw.githubusercontent.com/a131381568/catching-the-star-master/main/doc/images/11-docker-setting-4.gif)
1. SSH 連接至遠端伺服器。
2. 安裝並啟動 Docker。
```shell
# 如果在 ubuntu 直接安裝 docker 會抓不到，所以要先更新 apt
sudo apt-get update && sudo apt-get upgrade
sudo apt-get install -y docker.io
sudo apt install -y docker-compose
# 檢查版本
docker -v
docker-compose version
# 啟動 docker
sudo service docker start
```
3. 將倉庫的檔案都上傳至伺服器。
4. 參照 docker-compose.yml 的設定，啟動多個容器。
```shell
docker-compose up -d
```
5. 將 sql 檔匯入至 postgres 的容器內
```shell
# 將 ctsm-db.sql 複製到 postgres 的容器內 
psql -U postgres postgres < ctsm-db.sql
docker cp ctsm-db.sql 983358f034a9:/tmp

# 進入 postgres 容器
docker exec -it postgres bash

# 匯入 db
psql -U postgres postgres < ctsm-db.sql

# 匯入完後進入 psql cli 介面
psql --host=0.0.0.0 --username=postgres

# 查看資料庫是否匯入
\l

# 查看資料表是否匯入
\z
```