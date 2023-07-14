import {Component} from 'react'

import './index.css'

import FaqItem from '../FaqItem'

class Faqs extends Component {
  state = {
    isActive: false,
  }

  onButtonToggle = value => {
    this.setState({isActive: !value})
  }

  render() {
    const {faqsList} = this.props
    const {isActive} = this.state
    return (
      <div className="main-container">
        <div className="faqs-container">
          <div>
            <h1 className="heading">Faqs</h1>
          </div>
          <div>
            <ul>
              {faqsList.map(each => (
                <FaqItem
                  eachFaqItem={each}
                  key={each.id}
                  onButtonToggle={this.onButtonToggle}
                  isActive={isActive}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Faqs
