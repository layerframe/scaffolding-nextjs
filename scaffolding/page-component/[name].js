/**
 * {{pageName}}.js
 */
import React from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'

// Local components
import CommonLayout from '../components/Layouts/CommonLayout'

const {{pageName}} = ({ pageTitle = 'Page Title', headerTitle = 'Header Title' }) => (
  <CommonLayout pageTitle={pageTitle} className={`{{name}}`}>
    <div className="container">
      <div className="page_content__main text-editor mx-auto">
        <p>{headerTitle}</p>
      </div>
    </div>
    <style jsx>{`
      .{{name}} {

      }
    `}</style>
  </CommonLayout>
)

/**
 * getInitialProps
 * @description Similar to componentDidMount and where API data fetches should happen.
 */
{{pageName}}.getInitialProps = async function({ query }) {
  console.log(query)
  // const results = await fetch('http://localhost:' + (process.env.NODE_ENV == 'production' ? 8080 : 3000) + '/api/buildSoundtrack?lang='+query.id)
  // const data = await results.json()
  // console.log(data)

  // The component props.
  return {
    headerTitle: 'Override the default.',
  }
};

{{pageName}}.propTypes = {
  headerTitle: PropTypes.string,
  pageTitle: PropTypes.string,
};

export default {{pageName}}
