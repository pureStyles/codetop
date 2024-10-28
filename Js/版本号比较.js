const compareVersion = function(version1, version2) {
    // 需要处理前导0,使用正则处理
    version1 = version1.replace(/\.0+/g, '.').replace(/^0+/, '');
    version2 = version2.replace(/\.0+/g, '.').replace(/^0+/, '');

    let [versionNumbers1, tagNumbers1] = splitVersion(version1);
    let [versionNumbers2, tagNumbers2] = splitVersion(version2);

    for(
        let i = 0, len = Math.max(versionNumbers1.length, versionNumbers2.length);
        i < len;
        i ++
    ) {
        const n1 = versionNumbers1[i] || 0;
        const n2 = versionNumbers2[i] || 0;
        if (n1 < n2) {
            return -1;
        } else if (n1 > n2) {
            return 1;
        }
    }

    for(
        let i = 0, len = Math.max(tagNumbers1.length, tagNumbers2.length);
        i < len;
        i ++
    ) {
        const tag1 = tagNumbers1[i] || 0;
        const tag2 = tagNumbers2[i]  || 0;
        if (tag1 < tag2) {
            return -1;
        } else if (tag1 > tag2) {
            return 1;
        }
    }
    return 0;
}


function splitVersion(version) {
    const tagMap = {
        alpha: 1,
        beta: 2,
    };
    const tagPart = version.split('-')[1];
    const versionNumbers = version.split('-')[0].split('.').map(Number);
    let tagNumbers = []
    if (tagPart) {
        const tag = tagPart.split('.')[0];
        tagNumbers[0] = tagMap[tag];
        tagNumbers[1] = +tagPart.split('.')[1];
    }
    return [versionNumbers, tagNumbers];
}

const version1 = "1.0-beta.04", version2 = "1.0.0.0-alpha.5";
const result = compareVersion(version1, version2);

console.log(result);

