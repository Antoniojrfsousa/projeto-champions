import { response } from "express";
import { PlayerModel } from "../models/player-model";
import * as PlayerRepostory from "../repositores/players-repository";
import * as HttpResponse from "../utils/http-helper";
import { StatisticsModel } from "../models/statistics-model";

export const getPlayerService = async () => {
    const data = await PlayerRepostory.findAllPlayers();
    let response = null;

    if (data) {
        response = await HttpResponse.ok(data);
    } else {
        response = await HttpResponse.noContent();
    }

    return response;
}

export const getPlayerByIdService = async (id: number) => {
    const data = await PlayerRepostory.findAllPlayersById(id);
    let response = null;

    if (data) {
        response = HttpResponse.ok(data);
    } else {
        response = HttpResponse.noContent()
    }

    return response;
}

export const creatPlayerService = async (player: PlayerModel) => {
    let response = null;

    if (Object.keys(player).length != 0) {
        await PlayerRepostory.insertPlayer(player);

        response =  await HttpResponse.created();
    } else {
        response = await HttpResponse.badRequest();
    }

    return response;

};

export const deletePlayersService = async (id: number)=> {
    let response = null;
    const isDeleted = await PlayerRepostory.deleteOnePlayer(id);
    await PlayerRepostory.deleteOnePlayer(id);
    
    if(isDeleted){
        response = await HttpResponse.ok({ message: "deleted" });
    }else{
        response = await HttpResponse.badRequest()
    }
    

    
    return response;
};

export const updatePlayerService = async (
    id: number, 
    statistics: StatisticsModel
) =>{
    const data = await PlayerRepostory.findAndModifyPlayer(id,statistics);
    let response = null;
    if(Object.keys(data).length === 0){
        response = await HttpResponse.badRequest();
    }else{
        response = await HttpResponse.ok(data);
    }

    
    return response;

}