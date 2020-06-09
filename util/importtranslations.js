import { v5 as uuidv5 } from "uuid";
import fs from "fs";

//const project = 'c536965a-325d-4714-917f-27d14644dfcd'; // academy
const project = "92241e3a-beb4-4b1e-92e5-27962d2118d8"; // group app

function iterate(json, key) {
  if ((json && Object.entries(json).length === 0) || typeof json !== "object") {
    const _id = uuidv5(key, project);
    const en = json.toString().replace('"', '\\"');
    console.log(
      `{"_id": "${_id}", "_type": "translation", "project": {"_ref": "${project}", "_type": "reference"}, "key": "${key}", "value": {"_type": "localeString", "en": "${en}"}}`
    );
  } else {
    for (const subkey in json) {
      iterate(json[subkey], key ? `${key}_${subkey}` : subkey);
    }
  }
}

const json = JSON.parse(fs.readFileSync("./en.json", "utf8"));
iterate(json);

// sanity dataset import my-data-dump.ndjson production
// --replace Overwrite existing documents. If you specify _id in the imported data,
//           this flag can be very useful. It will let you reimport stuff that you got wrong in an earlier pass.
// --missing Only create documents which don't exist, leave the rest alone.
