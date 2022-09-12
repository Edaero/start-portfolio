// 설정들에 대한 파일을 넣는다.
// process.env. 코드는 환경 설정에 있는 것을 가져온다.
// https://www.npmjs.com/package/dotenv에서 설치 코드를 가져와 설치함
// .env에 있는 NOTION_DATABASE_ID와 NOTION_TOKEN을 가져옴
export const DATABASE_ID = process.env.NOTION_DATABASE_ID;
export const TOKEN = process.env.NOTION_TOKEN;
