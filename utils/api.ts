const createURL = (path: string) => {
    return window.location.origin + path
  }
  
  export const updatedEntry = async (id: string, content: string) => {
    const res = await fetch(
      new Request(createURL(`/api/journal/${id}`), {
        method: 'PATCH',
        body: JSON.stringify({ content }),
      })
    )
  
    if (res.ok) {
      const data = await res.json()
      return data.data
    }
  }
  
  export const createNewEntry = async () => {
    const res = await fetch(
      new Request(createURL('/api/journal'), { method: 'POST' })
    )
  
    if (res.ok) {
      const data = await res.json()
      return data.data
    }
  }
  
  export const getEntries = async () => {
    const res = await fetch(new Request(createURL('/api/journal')))
  
    if (res.ok) {
      const data = await res.json()
      return data.data
    }
  }
  
  export const requestAnalysis = async (content: string) => {
    const res = await fetch(
      new Request(createURL('/api/analysis'), {
        method: 'POST',
        body: JSON.stringify({ content }),
      })
    )
  
    if (res.ok) {
      const data = await res.json()
      return data.data
    }
  }
  
  export const vectorSearch = async (content: string) => {
    const res = await fetch(
      new Request(createURL('/api/search'), {
        method: 'POST',
        body: JSON.stringify({ content }),
      })
    )
  
    if (res.ok) {
      const data = await res.json()
      return data.data
    }
  }
  
  export const ask = async (query: string) => {
    const res = await fetch(
      new Request(createURL('/api/rag'), {
        method: 'POST',
        body: JSON.stringify({ query }),
      })
    )
  
    if (res.ok) {
      const data = await res.json()
      return data.data
    }
  }
  
  export const deleteEntry = async (id: string) => {
    const res = await fetch(
      new Request(createURL(`/api/journal/${id}`), {
        method: 'DELETE',
      })
    )
  
    if (res.ok) {
      const data = await res.json()
      return data.data
    }
  }
  