module.exports = {
    get: () => Promise.resolve({ status: 200,data:'value' }),
    post: () => Promise.resolve({ status: 200,data:'value' })
}
