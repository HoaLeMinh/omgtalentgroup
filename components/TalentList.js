import Card from './Card'

const people = [
  {
    name: 'Calvin Hawkins',
    title: 'CEO',
    description: 'Test description',
    email: 'calvin.hawkins@example.com',
    href: 'https://vnexpress.net',
    image:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Kristen Ramos',
    title: 'CTO',
    description: 'Test description',
    email: 'kristen.ramos@example.com',
    href: 'https://thanhnien.vn',
    image:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Ted Fox',
    title: 'CFO',
    description: 'Test description',
    email: 'ted.fox@example.com',
    href: 'https://tuoitre.vn',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

export default function TalentList() {
  return (
    <div className="container py-12">
      <div className="-m-4 flex flex-wrap">
        {people.map((person) => (
          <Card
            key={person.name}
            title={person.title}
            description={person.description}
            imgSrc={person.image}
            href={person.href}
          />
        ))}
      </div>
    </div>
  )
}

/** 
<ul className="divide-y divide-gray-200">
        {people.map((person) => (
          <li key={person.email} className="py-4 flex">
            <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{person.name}</p>
              <p className="text-sm text-gray-500">{person.email}</p>
            </div>
          </li>
        ))}
      </ul>
  */
