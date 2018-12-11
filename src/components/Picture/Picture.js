import React, {Component} from 'react';
import "./style.css";

const pictures = [
     {
            photo: 'https://cdn.images.dailystar.co.uk/dynamic/1/photos/755000/620x/cristiano-ronald' +
                    'o-net-worth-how-much-madrid-player-worth-695569.jpg?r=5c053f491050f',
            id: 0,
            clicked: false
        }, {
            photo: 'https://www.tsn.ca/polopoly_fs/1.912227!/fileimage/httpImage/image.jpg_gen/deriv' +
                    'atives/landscape_620/antoine-griezmann.jpg',
            id: 1,
            clicked: false
        }, {
            photo: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2018/02/03/15176565269601.' +
                    'jpg',
            id: 2,
            clicked: false
        }, {
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqa94bKUtifeRx2kxVEZFgTNx3' +
                    'JjEgD1ymNqRP8k8Au9zmLZiz',
            id: 3,
            clicked: false
        }, {
            photo: 'https://cdn.cnn.com/cnnnext/dam/assets/180713152634-modric-tease-exlarge-169.jpg',
            id: 4,
            clicked: false
        }, {
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdAgR4dMl-fUDXgLKKYno6UHTm' +
                    'vNfQfnHHAcQvUUtP7NMpp0OR',
            id: 5,
            clicked: false
        }, {
            photo: 'http://d3nfwcxd527z59.cloudfront.net/content/uploads/2018/03/29165024/Sergio-Ram' +
                    'os.jpg',
            id: 6,
            clicked: false
        }, {
            photo: 'https://img.fifa.com/image/upload//pohbrusju6jfbv3gldxc.jpg',
            id: 7,
            clicked: false
        }, {
            photo: 'https://www.thesouthafrican.com/wp-content/uploads/2018/02/908406770.jpg',
            id: 8,
            clicked: false
        }, {
            photo: 'https://img.rasset.ie/00111242-500.jpg',
            id: 9,
            clicked: false
        }, {
            photo: 'https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2018/03/19/jose' +
                    'f-martinez-hat-trick-atlanta.jpg?itok=qB-IimfC',
            id: 10,
            clicked: false
        }, {
            photo: 'https://cbsatlanta.files.wordpress.com/2017/05/20170520_atlutd_houston-1662.jpg',
            id: 11,
            clicked: false
            }
]

export default class picRender extends Component {

    state = {
        clicked: [],
        pictures: pictures,
        score: 0,
        highScore: 0
    }

    handleClick = (id) => {
        if(!this.state.clicked.includes(id)){
            const newArray = this.shuffle(this.state.pictures);
            this.setState({clicked : [...this.state.clicked, id], pictures: newArray, score: this.state.score + 1}, function(){
                this.props.setCurrentScore(this.state.score);
                if (this.state.score > this.state.highScore) {
                    this.setState({highScore: this.state.score});
                    this.props.setHighScore(this.state.score)
                }
            })
        } else {
            alert('You Lose! Try Again?')
            this.setState({clicked: [], pictures: pictures, score: 0});
            this.props.setCurrentScore(0);
        }
    }
    
    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }

    render() {
        return this.state.pictures.map(pic => <img
            className="photo"
            data-key={pic.photo}
            key={pic.id}
            id ={pic.id}
            src={pic.photo}
            onClick={()=> this
            .handleClick(pic.id)}></img>);
    }
}