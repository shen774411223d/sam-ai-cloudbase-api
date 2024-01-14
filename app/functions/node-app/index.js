// 返回输入参数
exports.main = async (event, context) => {
    console.log("Hello World");
    return { event, context };
};
