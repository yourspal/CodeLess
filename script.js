$(document).ready(function() {
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
        drop: function(event, ui) {
            var data = ui.helper.attr("data-tool");
            if (data === "Table") {
                // If dropped tool is a table, create a datatable
                $(this).append(`<table class="data-table">
                                    <thead>
                                        <tr>
                                            <th>Column 1</th>
                                            <th>Column 2</th>
                                            <!-- Add more columns as needed -->
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Data 1</td>
                                            <td>Data 2</td>
                                            <!-- Add more data rows as needed -->
                                        </tr>
                                    </tbody>
                                </table>`);
                // Initialize the datatable
                $('.data-table').DataTable();
            } else if (data) {
                $(this).append(`<input type="text" class="input-tool" value="${data}">`).append(`<button>click</button>`);
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
        drop: function(event, ui) {
            ui.helper.remove();
        }
    });

    // Handle right click to initiate drag for input fields
    $(document).on("contextmenu", ".input-tool", function(event) {
        $(this).draggable({
            revert: "invalid",
            zIndex: 100,
            start: function(event, ui) {
                ui.helper.addClass("dragged");
            }
        });
        $(this).trigger("mousedown");
        event.preventDefault();
    });

    // Remove class on drag stop
    $(document).on("dragstop", ".input-tool", function() {
        $(this).removeClass("dragged");
    });
});
