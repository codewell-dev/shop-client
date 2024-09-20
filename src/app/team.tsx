const people = [
    {
      name: 'Колян',
      role: 'Головний Барбер',
      imageUrl:
        'https://static.ionlinecdn.com/integrica/images/9P5OXe4O/user/R4ZzQz4P-qEMkkY.jpg',
    },
    {
        name: 'Аркадій',
        role: 'Старший Барбер',
        imageUrl:
          'https://static.ionlinecdn.com/integrica/images/9P5OXe4O/user/35NDkY2w-Zb7Pt6.png',
      },
      {
        name: 'Ксенія',
        role: 'Досвідчений Барбер',
        imageUrl:
          'https://static.ionlinecdn.com/integrica/images/9P5OXe4O/user/k5YYYg5X-uax9Xk.png',
      },
      {
        name: 'Бодя',
        role: 'Барбер',
        imageUrl:
          'https://static.ionlinecdn.com/integrica/images/9P5OXe4O/user/M40J7w19-jHBYSh.png',
      },
      {
        name: 'Катя',
        role: 'Барбер',
        imageUrl:
          'https://static.ionlinecdn.com/integrica/images/9P5OXe4O/user/G2VZmk2A-hbRzHf.jpg',
      },
    // More people...
  ]
  
  export default function Team() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Наша команда:</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Ми займаємося тим, що впливає на впевненість чоловіків, їх самовідчуття і тим, що формує думку інших людей про них… зовнішнім виглядом😎.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img alt="" src={person.imageUrl} className="h-16 w-16 rounded-full" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }