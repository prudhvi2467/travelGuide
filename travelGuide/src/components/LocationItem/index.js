import {
  LocationCartContainer,
  Heading,
  HeadingDescription,
  Paragraph,
} from './style'

import './index.css'

const LocationItem = props => {
  const {locationData} = props
  const {imageUrl, description, name} = locationData
  return (
    <li className="list-item">
      <LocationCartContainer>
        <img src={imageUrl} alt={name} className="image" />
        <HeadingDescription>
          <Heading>{name}</Heading>
          <Paragraph>{description}</Paragraph>
        </HeadingDescription>
      </LocationCartContainer>
    </li>
  )
}

export default LocationItem