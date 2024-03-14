$(document).ready(function () {
    // Make tools draggable
    $(".tool").draggable({
        revert: "invalid",
        helper: "clone",
        zIndex: 100
    });
    $(".fool").draggable({
        revert: "invalid",
        helper: "clone",
        zIndex: 100
    });

    // Make work area droppable
    $("#work-area").droppable({
        accept: ".tool, .input-tool, .fool",
        drop: function (event, ui) {
            var data = ui.helper.attr("data-tool");
            if (data === "Table") {
                // If dropped tool is a table, create a datatable
                $(this).append(`<div class="table-container">
                                    <table class="data-table">
                                        <thead>
                                            <tr>
                                                <th contenteditable="true">Column 1</th>
                                                <th contenteditable="true">Column 2</th>
                                                
                                                <button class="add-col-button">+ Column</button>
                                                <button class="remove-col-button">- Column</button>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td contenteditable="true">Data 1</td>
                                                <td contenteditable="true">Data 2</td>
                                                
                                            </tr>
                                        </tbody>
                                    </table>
                                    <button class="add-row-button">+ Row</button>
                                    
                                    <button class="remove-row-button">- Row</button>
                                    
                                </div>`);
                // Initialize the datatable
                // $('.data-table').DataTable();
            }else if(data=="Butt"){
                $(this).append(`<button class="btn-btn-outline-secondry">ClickMe</button>`);
                // Make the newly created input field draggable
                $(".input-tool").draggable({
                    revert: "invalid",
                    zIndex: 100
                });
            }else if(data=="Form"){
                $(this).append(`<div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">@</span>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
              </div>
              
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
                <span class="input-group-text" id="basic-addon2">@example.com</span>
              </div>
              
              <label for="basic-url" class="form-label">Your vanity URL</label>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
                <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
              </div>
              
              <div class="input-group mb-3">
                <span class="input-group-text">$</span>
                <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                <span class="input-group-text">.00</span>
              </div>
              
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Username" aria-label="Username">
                <span class="input-group-text">@</span>
                <input type="text" class="form-control" placeholder="Server" aria-label="Server">
              </div>
              
              <div class="input-group">
                <span class="input-group-text">With textarea</span>
                <textarea class="form-control" aria-label="With textarea"></textarea>
              </div>`);
                // Make the newly created input field draggable
                $(".input-tool").draggable({
                    revert: "invalid",
                    zIndex: 100
                });
            }else if (data) {
                $(this).append(`<input type="text" class="input-tool" value="${data}">`);
                // Make the newly created input field draggable
                $(".input-tool").draggable({
                    revert: "invalid",
                    zIndex: 100
                });
            } else {
                $(this).append(ui.helper.clone());
            }
        }
    });

    // Make bin droppable
    $("#bin").droppable({
        accept: ".input-tool",
        drop: function (event, ui) {
            ui.helper.remove();
        }
    });

    // Handle right click to initiate drag for input fields
    $(document).on("contextmenu", ".input-tool", function (event) {
        $(this).draggable({
            revert: "invalid",
            zIndex: 100,
            start: function (event, ui) {
                ui.helper.addClass("dragged");
            }
        });
        $(this).trigger("mousedown");
        event.preventDefault();
    });

    // Remove class on drag stop
    $(document).on("dragstop", ".input-tool", function () {
        $(this).removeClass("dragged");
    });

    // Add Row
    $(document).on("click", ".add-row-button", function () {
        var $table = $(this).siblings(".data-table");
        $table.find("tbody").append("<tr></tr>");
        var cols = $table.find("thead tr th").length;
        for (var i = 0; i < cols; i++) {
            $table.find("tbody tr:last").append("<td contenteditable='true'></td>");
        }
    });

    // Add Column
    $(document).on("click", ".add-col-button", function () {
        var $table = $(this).siblings(".data-table");
        $table.find("thead tr").append("<th contenteditable='true'>New Column</th>");
        $table.find("tbody tr").append("<td contenteditable='true'></td>");
    });

    // Remove Row
    $(document).on("click", ".remove-row-button", function () {
        var $table = $(this).siblings(".data-table");
        if ($table.find("tbody tr").length > 1) {
            $table.find("tbody tr:last").remove();
        }
    });

    // Remove Column
    $(document).on("click", ".remove-col-button", function () {
        var $table = $(this).siblings(".data-table");
        if ($table.find("thead tr th").length > 1) {
            $table.find("thead tr th:last").remove();
            $table.find("tbody tr td:last").remove();
        }
    });

    // Make table cells editable after dropping
    $(document).on("dblclick", ".data-table td", function () {
        $(this).attr("contenteditable", "true").focus();
    });

    $(document).on("blur", ".data-table td", function () {
        $(this).removeAttr("contenteditable");
    });

    $(document).on("dblclick", ".data-table th", function () {
        $(this).attr("contenteditable", "true").focus();
    });

    $(document).on("blur", ".data-table th", function () {
        $(this).removeAttr("contenteditable");
    });
});