const Highlight = ({ color, children }) => (
    <span className={`relative highlight highlight-${color}`}>
        <span className='relative z-2'>{children}</span>
    </span>
);

const Intro = () => (
<div className='m-auto-ns f4 f3-m f2-l tc w-80-l normal'>
    <div className="mb3 mb4-ns"><Highlight color='aqua'>Lost in Tokyo</Highlight> is a directory of fun places to see, play in and <Highlight color='yellow'>explore</Highlight>, in <Highlight color='blue'>Tokyo, Japan</Highlight>.</div>
    <div>From <Highlight color='blue'>museums</Highlight> and <Highlight color='blue'>galleries</Highlight>, to <Highlight color='pink'>Robot Restaurants</Highlight> and <Highlight color='pink'>kitten cafes</Highlight>, Tokyo is the gift that keeps on giving. <Highlight color='yellow'>Dattebayo!</Highlight></div>
</div>
);

// The ({ className, href, children }) grabs our properties directly which means we don't have to type out prop.className, props.href etc.
const NavItem = ({ className, href, children, logo }) => (
    <li className={`mh2-ns f6 f4-l tc ${className}`}>
        <a className='white no-underline' href={href}>
            {/* Here we check for the logo prop, if we have it we render out our logo otherwise we just render out our regular navigation text children prop */}
            {logo ? <img src='images/logo.svg' className='db center logo' /> : children}
        </a>
    </li>
);

const Nav = () => (
    <nav className='pt3 pt4-ns mb4 mb0-ns'>
        <ul className='list flex flex-wrap flex-nowrap-ns justify-between items-center pa0 ma0'>
            {menu.map((item, index) => (
                <NavItem key={index} {...item} />
            ))}
        </ul>
    </nav>
);

const Overlay = ({ showInfo, title, description, link }) => (
    <div className='absolute w-100 h-100 flex items-center pa3 pa4-ns bg-aqua overlay' style={{
        // We do a test to see whether showInfo state is true if it is we change the tranform to be none, otherwise -100%
        transform: showInfo ? 'none' : 'translateY(-100%)'
    }}>
        <div>
            <h1 className='f4 f3-ns mt0 mb2 regular black normal lh-title'>
            {link ? <a href={link} className='no-underline link hot-pink hover-light-pink' target='_blank'>{title}</a> : title}
            </h1>
            <p className='lh-title lh-copy-ns mv0 black f6 measure-l'>{description}</p>
        </div>
    </div>
);

// We can also create components as classes, these give us more advanced functionality and features such as the component lifecycle as well as react's in-built state

class Attraction extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showInfo: false
        }

        // Set up our method or else referencing 'this' will not work
        this.toggleInfo = this.toggleInfo.bind(this)
        this.closeInfo = this.closeInfo.bind(this)
    }

    // This is our own method
    toggleInfo() {
        this.setState((prevState, showInfo) => {
            // Here we invest our showInfo boolean by using the previous state and ! exclamation mark
            return {showInfo: !prevState.showInfo};
        });
    }

    closeInfo() {
        // Here we use setState the usual way because we don't need access to the previous state, we're just force setting the showInfo to be false
        this.setState({
            showInfo: false
        })
    }

    render()  {

        const { title, description, image, className } = this.props

        const { showInfo } = this.state

        return (
            <div className={`ph4 ph5-ns ph0-l mb4 mb5-ns w-100 overflow-hidden attraction ${className}`}>

                <div className='relative pointer'
                onMouseEnter={this.toggleInfo}
                onMouseLeave={this.closeInfo}>
                    {/*Here we remember to pass along all of our props and state*/}
                    <Overlay {...this.props} {...this.state} />
                    <img src={`images/${image}`} />
                </div>
            </div>
        )
    }
}



const App = () => (
<div>
    <div className='min-vh-100 ph4 flex flex-column'>
    <Nav />
    <Intro />
    </div>

    <div className='flex flex-wrap container'>
        {attractions.map((attraction, index) => (
            <Attraction key={index} {...attraction} />
        ))}
    </div>
</div>
)
ReactDOM.render(<App />, document.getElementById('root'));
