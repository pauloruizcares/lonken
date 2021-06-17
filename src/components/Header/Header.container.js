import React from 'react'
import Header from './Header'

import {
  useQuery,
  gql,
} from '@apollo/client'

const GET_LINKS = gql`
  {
    navLinksCollection {
      total
      items {
        name,
        enabled,
        to,
        icon {
          url
        }
      }
    }
  }
`

const ContainerHeader = () => {
  const { loading, error, data } = useQuery(GET_LINKS)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  const routes = data.navLinksCollection.items.map((item) => ({
    title: item.name,
    to: item.to,
  }))

  return (
    <Header routes={routes}/>)
}

export default ContainerHeader
