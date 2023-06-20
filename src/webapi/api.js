const baseurl="https://pustakalaya-beckbone.onrender.com"
export const apiEndPoint = {
    CATEGORY_API :baseurl+"/category/list",
    BOOK_LIST:baseurl+"/book/totalbook",
    FREE_BOOK_API:baseurl+"/book/freebooklist",
    USER_LIST:baseurl+"/user/userList",
    ADMIN_SIGNIN:baseurl+"/admin/signIn",
    ADMIN_SIGNUP:baseurl+"/admin/signup",
    REMOVE_CATEGORY:baseurl+"/category/remove",
    ADD_CATEGORY:baseurl+"/category/add",
    EDIT_CATEGORY:baseurl+"/category/edit",
    REMOVE_BOOK:baseurl+"/book/update-book",
    TOTAL_USERS:baseurl+"/user/userList",
    TOTAL_BOOKS:baseurl+"/book/list",
    TOTAL_FREE_BOOKS:baseurl+"/book/freeBookList",
    PERMISSION_CHANGE:baseurl+"/book/change/permissionAllowed/",
    TOTAL_PENDING_BOOKS:baseurl+"/book/totalpendingbook",
    TOTAL_ORDERS:baseurl+"/order/vieworder",
    CHANGE_STATUS:baseurl+"/order/changestatus/",
    DISK_STORAGE:baseurl+"http://localhost:3006/images/",
    DELETE_BOOK:baseurl+"/book/removeBook/book/",
  

}
