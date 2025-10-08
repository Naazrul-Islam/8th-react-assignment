import { useState } from "react";

import axios from 'axios'
import { useEffect,  } from 'react'

const useApplication = () => {
  const [application, setApplication] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    axios('/Application.json')
      .then(data => setApplication(data.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [])

  return { application, loading, error }
}

export default useApplication