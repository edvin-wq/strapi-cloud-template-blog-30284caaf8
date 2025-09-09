import fs from 'fs';
import path from 'path';
import axios from 'axios';
import FormData from 'form-data';

const STRAPI_URL = 'https://pretty-wonder-71e051ad09.strapiapp.com';
// create an API Token in Strapi Cloud
const API_TOKEN = 'f4fddde768c1d74ab3e3128176709c965022796e8f42bb227dcffd6d9c68240215cbf41c43bdf44faa74587991d6925b3abe67db45a6f2d9f2c8bf04015caa3c931c532513e4df8dfaf56b7613ea5a6a6022744a1d792d8f2416a2222c15bc64a2ca333bd992a95db745b08334ef62e92dc6446e113e3714b30d0579047a24c4'
const UPLOADS_PATH = './public/uploads';

async function uploadFile(filePath) {
  const form = new FormData();
  form.append('files', fs.createReadStream(filePath));

  try {
    const res = await axios.post(`${STRAPI_URL}/api/upload`, form, {
      headers: {
        ...form.getHeaders(),
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });
    console.log(`Uploaded: ${filePath}`);
  } catch (err) {
    console.error(`Error uploading ${filePath}:`, err.response?.data || err.message);
  }
}

async function uploadAll() {
  const files = fs.readdirSync(UPLOADS_PATH);
  for (const file of files) {
    const filePath = path.join(UPLOADS_PATH, file);
    if (fs.statSync(filePath).isFile()) {
      await uploadFile(filePath);
    }
  }
}

uploadAll();
