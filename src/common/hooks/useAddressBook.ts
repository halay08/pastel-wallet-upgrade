import { useState, useEffect } from 'react'
import { readAddressBook, writeAddressBook } from 'api/helpers'
import { TAddressBook } from 'types/rpc'

export const useAddressBook = (): {
  addressBook: TAddressBook[]
  updateAddressBook: ({ address, label }: TAddressBook) => void
  isAddressBookLoaded: boolean
} => {
  const [addressBook, setAddressBook] = useState<TAddressBook[]>([])
  const [isAddressBookLoaded, setIsAddressBookLoaded] = useState<boolean>(false)

  useEffect(() => {
    ;(async function () {
      setIsAddressBookLoaded(false)
      const addrBook: TAddressBook[] = await readAddressBook()
      setAddressBook(addrBook)
      setIsAddressBookLoaded(true)
    })()
  }, [])

  const updateAddressBook = ({ address, label }: TAddressBook) => {
    const [book] = addressBook.filter(b => b.address === address) || []
    let newAddressBook = addressBook
    if (book) {
      newAddressBook = addressBook.map(b => {
        return {
          ...b,
          label: b.address === address ? label : b.label,
        }
      })
    } else {
      newAddressBook = addressBook.concat([
        {
          address,
          label,
        },
      ])
    }

    setAddressBook(newAddressBook)
    writeAddressBook(newAddressBook)
  }

  return { addressBook, updateAddressBook, isAddressBookLoaded }
}
