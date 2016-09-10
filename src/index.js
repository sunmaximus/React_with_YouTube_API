import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyC5IQbk11ZIvgbh2n4tLWD8rQRLfPUQxZE';

//YTSearch({key: API_KEY, term: 'kitty'}, (data) => console.log(data));

// To handle which component should handle the data by fetching it.
// React uses this method called Downward Dataflow.
// In practice, that mean the most parent component should handle fetching the
// data. In this case index.js the most parent component we have.

/* Create a new component. This component should produce some HTML*/
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('kitty');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render(){
    // This line help to triger search videos every 300 milisec. It will help to
    // prevent lagging when search because the state is making the component
    // to re-render every time.
    const videoSearch = _.debounce( (term) => {this.videoSearch(term)}, 300);
    // OLD <SearchBar />
    // <SearchBar onSearchTermChange={(term) => this.videoSearch(term)} />
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    );
  }
}
// Take this component's generated HTML and put it on the page (in the DOM)
//
ReactDOM.render(<App />, document.querySelector('.container'));
