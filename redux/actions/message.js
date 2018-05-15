export const MSG_TEXT = "MSG_TEXT"


export const MsgErr = (err) => {
    return{
        type: MSG_TEXT,
        err
    }
}
