// App.js
import React from 'react';
import Faq from './components/Faq';



function App() {
  return <main>
    <Faq 
      question="Can I pay for my Docs enterprise account via PayPal?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        tellus rutrum rhoncus ipsum maecenas tellus. Consequat odio viverra
        convallis."
        date="April 22, 2020"
        author={{
          name: 'Emma Washington',
          image: 'https://randomuser.me/api/portraits/women/39.jpg'
        }}
    />
  </main>;
}

export default App;