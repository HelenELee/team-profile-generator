const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = "Engineer";
    }

    getGithub() {
        return this.github;
    }

    createHTML() {
        return `<section class="person-card">
        <div class="card-header"><h3>${this.name}</h3>
          <i class="fa-solid fa-glasses fa-sm"></i> <h4>${this.role}</h4>
        </div>
        <div class="card-body">
          <table class="person-table">
            <tr class="border_bottom"><td class="table-row"><h5>ID: ${this.id}</h5></td></tr>
            <tr class="border_bottom"><td class="table-row"><h5>Email: <a href=mailto:"${this.email}">${this.email}</a></h5></td></tr>
            <tr class="border_bottom"><td class="table-row"><h5>Github: <a href="https://github.com/${this.github}">${this.github}</a></h5></td></tr>
          </table>
        </div>
      </section>\n `

    }
}

module.exports = Engineer;