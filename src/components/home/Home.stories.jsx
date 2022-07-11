import Home from './Home'
export default {
    title: 'DalmaFuertes/page',
    component: Home,
    
}
const Template = args => <Home  {...args}/>
export const home= Template.bind({});
