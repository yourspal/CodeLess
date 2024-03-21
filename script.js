$(document).ready(function () {
    // Make tools draggable
    $(".tool").draggable({
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
                $(this).append(`<div class="table-container m-2">
                                    <table class="data-table">
                                        <thead>
                                            <tr>
                                                <th contenteditable="true">Column Head</th>
                                                <th contenteditable="true">Column Head</th>
                                            </tr>
                                            <button class="add-col-button cir btn btn-success">+ Column</button>
                                            <button class="remove-col-button cir btn btn-danger">- Column</button>
                                        
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td contenteditable="true">Click to Enter Data</td>
                                                <td contenteditable="true">Click to Enter Data</td>
                                                
                                            </tr>
                                        </tbody>
                                    </table>
                                    <button class="add-row-button cir btn btn-success">+ Row</button>
                                    
                                    <button class="remove-row-button cir btn btn-danger">- Row</button>
                                    
                                </div>`);
                // Initialize the datatable
                // $('.data-table').DataTable();
            }else if(data=="Butt"){
                $(this).append(`<button type="button" class="btn btn-outline-dark yo" style="margin-left: 500px;">Click Here</button>`);
                // Make the newly created input field draggable
                $(".input-tool").draggable({
                    revert: "invalid",
                    zIndex: 100
                });
            }else if(data=="Form"){
                $(this).append(`<div class="input-group m-2">
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
            }else if(data=="NavBar"){
                $(this).append(`<nav class="navbar navbar-expand-lg navbar-dark bg-dark m-2">
                <div class="container-fluid">
                  <a class="navbar-brand" href="#">Navbar</a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Dropdown
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <li><a class="dropdown-item" href="#">Action</a></li>
                          <li><a class="dropdown-item" href="#">Another action</a></li>
                          <li><hr class="dropdown-divider"></li>
                          <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                      </li>
                    </ul>
                    <form class="d-flex">
                      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                      <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                  </div>
                </div>
              </nav>`);
                // Make the newly created input field draggable
                $(".input-tool").draggable({
                    revert: "invalid",
                    zIndex: 100
                });
            }
            else if (data=="pic"){
                $(this).append(`<img src="stuff/invia-logo-navy.png" class="rounded float-end" style="height: 30px; width: 90px;"alt="...">`)
            
            // } else if(data=="TextArea"){
            //     $(this).append(`<div class="input-group">
            //     <span class="input-group-text">With textarea</span>
            //     <textarea class="form-control" aria-label="With textarea"></textarea>
            //   </div>`)
            }else if(data=="profilePic"){
                $(this).append(`<div id="profile-pic" class="profile-pic float-end">
                <!-- <label for="img" class="profile-pic-label"> -->
                    <img id="profile-pic-img" src="stuff/profile.png" alt="Profile Picture">
                    <input type="file" id="img" name="img" accept="image/*">
                
            </div>`);
            
            }else if (data) {
                $(this).append(`<div class="mb-3">
                
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Click here to change the Input">
              </div>`);
                // Make the newly created input field draggable
                $(".input-tool").draggable({
                    revert: "invalid",
                    zIndex: 100
                });
            }else{
                $(this).append(ui.helper.clone());
            }
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
        $table.find("tbody").append("<tr>Enter Data</tr>");
        var cols = $table.find("thead tr th").length;
        for (var i = 0; i < cols; i++) {
            $table.find("tbody tr:last").append("<td contenteditable='true'>Enter Data</td>");
        }
    });

    // Add Column
    $(document).on("click", ".add-col-button", function () {
        var $table = $(this).siblings(".data-table");
        $table.find("thead tr").append("<th contenteditable='true'>New Column</th>");
        $table.find("tbody tr").append("<td contenteditable='true'>Enter Data</td>");
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
    $(document).on("dblclick", ".yo", function () {
        $(this).attr("contenteditable", "true").focus();
    });

    $(document).on("blur", ".yo", function () {
        $(this).removeAttr("contenteditable");
    });

    
});