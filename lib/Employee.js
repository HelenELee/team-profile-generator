class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }

    createHTML() {
        return `<section class="person-card">
        <div class="card-header"><h3>${this.name}</h3>
          <i class="far fa-address-card fa-sm"></i> <h4>${this.role}</h4>
        </div>
        <div class="card-body">
          <table class="person-table">
            <tr class="border_bottom"><td class="table-row"><h5>ID: ${this.id}</h5></td></tr>
            <tr class="border_bottom"><td class="table-row"><h5>Email:<a href=mailto:"${this.email}">${this.email}</a></h5></td></tr>
          </table>
        </div>
      </section>\n`

    }
}

module.exports = Employee;