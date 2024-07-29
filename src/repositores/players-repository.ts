import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";


const database: PlayerModel[] = [

    {
        id: 1,
        name: "Ronaldo",
        club: "Retired",
        nationality: "England",
        position: "Midfielder",
        statistics: {
            Overall: 85,
            Pace: 76,
            Shooting: 82,
            Passing: 98,
            Dribbling: 84,
            Defending: 70,
            Physical: 72
        }
    },
    {
        id: 2,
        name: "Gareth",
        club: "Legends FC",
        nationality: "Wales",
        position: "Midfielder",
        statistics: {
            Overall: 84,
            Pace: 77,
            Shooting: 80,
            Passing: 97,
            Dribbling: 83,
            Defending: 71,
            Physical: 73
        }
    },
    {
        id: 3,
        name: "James",
        club: "Future Stars",
        nationality: "Scotland",
        position: "Midfielder",
        statistics: {
            Overall: 86,
            Pace: 75,
            Shooting: 83,
            Passing: 96,
            Dribbling: 85,
            Defending: 69,
            Physical: 71
        }
    },
    {
        id: 4,
        name: "David",
        club: "Legends FC",
        nationality: "England",
        position: "Midfielder",
        statistics: {
            Overall: 87,
            Pace: 78,
            Shooting: 84,
            Passing: 95,
            Dribbling: 82,
            Defending: 68,
            Physical: 74
        }
    },
    {
        id: 5,
        name: "Oliver",
        club: "Retired",
        nationality: "Ireland",
        position: "Midfielder",
        statistics: {
            Overall: 83,
            Pace: 74,
            Shooting: 81,
            Passing: 98,
            Dribbling: 80,
            Defending: 72,
            Physical: 70
        }
    },
    {
        id: 6,
        name: "Harry",
        club: "Future Stars",
        nationality: "England",
        position: "Midfielder",
        statistics: {
            Overall: 85,
            Pace: 77,
            Shooting: 82,
            Passing: 96,
            Dribbling: 83,
            Defending: 71,
            Physical: 73
        }
    },
    {
        id: 7,
        name: "Liam",
        club: "All-Stars",
        nationality: "Northern Ireland",
        position: "Midfielder",
        statistics: {
            Overall: 84,
            Pace: 75,
            Shooting: 80,
            Passing: 97,
            Dribbling: 84,
            Defending: 70,
            Physical: 71
        }
    },
    {
        id: 8,
        name: "Ethan",
        club: "Legends FC",
        nationality: "England",
        position: "Midfielder",
        statistics: {
            Overall: 82,
            Pace: 78,
            Shooting: 79,
            Passing: 96,
            Dribbling: 81,
            Defending: 72,
            Physical: 69
        }
    },
    {
        id: 9,
        name: "Jack",
        club: "Future Stars",
        nationality: "England",
        position: "Midfielder",
        statistics: {
            Overall: 85,
            Pace: 74,
            Shooting: 81,
            Passing: 99,
            Dribbling: 85,
            Defending: 71,
            Physical: 70
        }
    },
    {
        id: 10,
        name: "Noah",
        club: "All-Stars",
        nationality: "Wales",
        position: "Midfielder",
        statistics: {
            Overall: 84,
            Pace: 76,
            Shooting: 82,
            Passing: 97,
            Dribbling: 82,
            Defending: 73,
            Physical: 72
        }
    },
    {
        id: 11,
        name: "Daniel",
        club: "Retired",
        nationality: "Scotland",
        position: "Midfielder",
        statistics: {
            Overall: 86,
            Pace: 77,
            Shooting: 84,
            Passing: 95,
            Dribbling: 84,
            Defending: 69,
            Physical: 73
        }
    },
    {
        id: 12,
        name: "Matthew",
        club: "Legends FC",
        nationality: "England",
        position: "Midfielder",
        statistics: {
            Overall: 87,
            Pace: 78,
            Shooting: 85,
            Passing: 94,
            Dribbling: 83,
            Defending: 70,
            Physical: 75
        }
    },
    {
        id: 13,
        name: "Aiden",
        club: "Future Stars",
        nationality: "Ireland",
        position: "Midfielder",
        statistics: {
            Overall: 83,
            Pace: 73,
            Shooting: 80,
            Passing: 98,
            Dribbling: 79,
            Defending: 71,
            Physical: 72
        }
    },
    {
        id: 14,
        name: "George",
        club: "All-Stars",
        nationality: "England",
        position: "Midfielder",
        statistics: {
            Overall: 85,
            Pace: 75,
            Shooting: 83,
            Passing: 95,
            Dribbling: 82,
            Defending: 72,
            Physical: 73
        }
    },
    {
        id: 15,
        name: "Lucas",
        club: "Retired",
        nationality: "Northern Ireland",
        position: "Midfielder",
        statistics: {
            Overall: 84,
            Pace: 74,
            Shooting: 81,
            Passing: 97,
            Dribbling: 80,
            Defending: 70,
            Physical: 74
        }
    },
    {
        id: 16,
        name: "Alex",
        club: "Future Stars",
        nationality: "England",
        position: "Midfielder",
        statistics: {
            Overall: 82,
            Pace: 76,
            Shooting: 79,
            Passing: 96,
            Dribbling: 80,
            Defending: 71,
            Physical: 71
        }
    },
    {
        id: 17,
        name: "Mason",
        club: "All-Stars",
        nationality: "Wales",
        position: "Midfielder",
        statistics: {
            Overall: 85,
            Pace: 77,
            Shooting: 82,
            Passing: 98,
            Dribbling: 84,
            Defending: 70,
            Physical: 72
        }
    },
    {
        id: 18,
        name: "Caleb",
        club: "Legends FC",
        nationality: "Scotland",
        position: "Midfielder",
        statistics: {
            Overall: 86,
            Pace: 76,
            Shooting: 84,
            Passing: 95,
            Dribbling: 85,
            Defending: 69,
            Physical: 70
        }
    },
    {
        id: 19,
        name: "Jacob",
        club: "Future Stars",
        nationality: "England",
        position: "Midfielder",
        statistics: {
            Overall: 87,
            Pace: 79,
            Shooting: 83,
            Passing: 96,
            Dribbling: 82,
            Defending: 68,
            Physical: 74
        }
    },



];


export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
}

export const findAllPlayersById = async (
    id: number
): Promise<PlayerModel | undefined> => {
    return database.find((player) => player.id === id);
}

export const insertPlayer = async (palyer: PlayerModel) =>{
    database.push(palyer);
}

export const deleteOnePlayer = async (id: number) => {
    const index = database.findIndex(p => p.id ===id);

    if(index !== -1){
        database.splice(index, 1);
        return true
    }
    return false;
}

export const findAndModifyPlayer = async (
    id: number,
    statistics: StatisticsModel
): Promise<PlayerModel> =>{
    const playerIndex = database.findIndex( player => player.id === id)

    if(playerIndex !== -1){
        database[playerIndex].statistics = statistics
    }

    return database[playerIndex];
};