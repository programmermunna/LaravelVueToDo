<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card m-5">
                    <div class="card-header">Laravel Vue.js ToDo Apps   </div>

                    <div class="card-body">
                        <div class="input-group">
                            <input type="text" placeholder="Name" class="form-control">
                            <input type="text" placeholder="Email" class="form-control">
                            <input type="text" placeholder="Phone" class="form-control">
                            <div class="input-group-append px-2">
                                <button type="button" class="btn btn-info text-white">Add Todo List </button>
                            </div>
                        </div>

                        <table class="table my-3">
                            <thead class="thead-light">
                                <tr>
                                <th scope="col">SL.</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>
                                        <a href="#" class="btn btn-success">Edit</a> ||
                                        <a href="#" class="btn btn-danger">Delete</a>
                                    </td>
                                </tr>
                                <tr>
                                <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>
                                        <a href="#" class="btn btn-success">Edit</a> ||
                                        <a href="#" class="btn btn-danger">Delete</a>
                                    </td>
                                </tr>
                                <tr>
                                <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>
                                        <a href="#" class="btn btn-success">Edit</a> ||
                                        <a href="#" class="btn btn-danger">Delete</a>
                                    </td>
                                </tr>
                            </tbody>
                            </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
