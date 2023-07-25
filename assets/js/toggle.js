let openFields = {
    front: false,
    back: false,
    comp: false,
};
toggleField = (e, id) => {
    openFields[id] = !openFields[id];
    if (openFields[id]) {
        Object.keys(openFields).forEach((key) => key !== id && closeField(key));
    }
    $(`#${id}-toggle`).attr(
        "class",
        `${openFields[id] ? "fa fa-lg fa-angle-up" : "fa fa-lg fa-angle-down"}`,
    );
    $(`#${id}Header`).toggleClass("selectedHeader");
    $(`#${id}`).slideToggle("slow");
};
closeField = (id) => {
    console.log(id);
    if (openFields[id]) $(`#${id}`).slideToggle("slow");
    openFields[id] = false;
    $(`#${id}-toggle`).attr("class", "fa fa-lg fa-angle-down");
    $(`#${id}Header`).removeClass("selectedHeader");
};
