import { readFileSync, writeFileSync } from "fs";

const bomJsonList = ['6-17', '6-23', '7-5-1', '7-5-2', '7-5-4', '7-5-5', '7-5-6'].map((f => f+'.json'));

function main(){
  const ret = new Set<string>();
  for(let file of bomJsonList) {
    const bom = JSON.parse(readFileSync(`./bom/${file}`, { encoding: 'utf8' }));
    console.log(file + '-> #artifacts:' + bom.artifacts.length);
    // const allVdms = new Set<string>();
    bom.artifacts.forEach(e => {
      const nexusPath = e.nexusPath
      // console.log(nexusPath);
      const split = nexusPath.split('/');
      const vdmName = `${split[0]}/${split[1]}`;
      // console.log(vdmName);
      ret.add(vdmName);
    })
    console.log(ret.size);
    // console.log(ret);
    const content = Array.from(ret).join('\n');
    writeFileSync('deprecate-packages.txt', content, {encoding: 'utf-8'});
  }
}

main()
