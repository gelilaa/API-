/* firs class*/class re {


    login = '';
    name = '';
    homepage = '';
    repos = [];


    constructor(data) {
        Object.assign(this, data)
    }
    populate() {
        return fetch('https://api.github.com/users/' + this.login + '/repos?type=all&per_page=100')
            .then(res => res.json())
            .then(repo => {
                console.log(repo);
                this.repos = repo
                    .map(repo => new repos(repo));
                this.populated = true;
                return this;
            })
            .catch(err => console.error(err));
    }
    render() {
        const container = document.createElement('div');
        container.innerHTML = this.name;
        container.className = 'container';
        const par = document.createElement('p');


        par.innerHTML = this.login;
        container.appendChild(par);


        const renderedRepos = this.repos
            .map(repo => repo.render())
            .reduce((all, next) => {
                all.appendChild(next);
                return all;
            }, document.createElement('div'));
        renderedRepos.id = 'repo';
        renderedRepos.className = 'row'

        container.appendChild(renderedRepos)
        return container;





    }

}


/*second class*/class repos {

    id = NaN;
    name = '';
    homepage = '';
    full_name = ''
    language = []



    constructor(photoData) {
        Object.assign(this, photoData);
    }


    render() {
        const container = document.createElement('div');
        container.id = this.id;
        container.className = 'col-md-4 col-xs-6 portfolio-item'
        container.innerHTML = this.language;
        if (this.languege === false) {
            container.innerHTML = 'Markup'

        }

        const checkEl = document.createElement('a');
        checkEl.innerHTML = this.name;
        checkEl.href = this.homepage;
        checkEl.className = 'portfolio-item-info';
        checkEl.target = '_blank';
        const read = document.createElement('div');
        read.className = 'img-lines';

        container.appendChild(checkEl);
        container.appendChild(read);



        return container;
    }





}




export function getRepos() {
    debugger;


    const repos = 'gelilaa'
    fetch(`https://api.github.com/users/${repos}`)
        .then(res => res.json())
        .then(repoData => {
            const newData = new re(repoData);
            return newData.populate();

        })

        .then(repoinstance => {
            console.log(repoinstance);
            const view = repoinstance.render();
            document.getElementById('divResult').innerHTML = '';
            document.getElementById('divResult').appendChild(view);

        })

        .catch(err => console.error(err));

}

