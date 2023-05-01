import Card from "./card"
import List from "./list"

function Board() {
    return (
        <div className="flex flex-col flex-1 gap-4 p-4">
            <div>
                <h1 className="text-2xl font-bold">
                    Development
                </h1>
            </div>
            <main className="flex flex-1 gap-6">
                <List title='TO DO'>
                    <Card
                    title='Implementando incio'
                    />
                    <Card
                    title='Implementando incio'
                    />
                    <Card
                    title='Implementando incio'
                    />
                    <Card
                    title='Implementando incio'
                    />
                </List>
                <List/>
                <List/>
            </main>
        </div>
    )
}

export default Board
