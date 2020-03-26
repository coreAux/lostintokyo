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
            {menu.map(item => (
                <NavItem key={item.children} {...item} />
            ))}
        </ul>
    </nav>
);

const Attraction = ({ title, description, image, className }) => (
<div className={className}>
    <h1>{title}</h1>
    <p>{description}</p>
    <img src={`images/${image}`} />
</div>
);

const App = () => (
<div>
    <div className='min-vh-100 ph4 flex flex-column'>
    <Nav />
    <Intro />
    </div>

    <div className='flex flex-wrap container'>
        {attractions.map(attraction => (
            <Attraction key={attraction.title} {...attraction} />
        ))}
    </div>
</div>
)
ReactDOM.render(<App />, document.getElementById('root'));
