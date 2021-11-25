exports.myDateTime = () => {
    return Date();
}


exports.getBody = async(req) => {
    const buffers = [];
    for await (const chunk of req) {
        buffers.push(chunk);
    }
    const data = Buffer.concat(buffers).toString();
    return data;
}