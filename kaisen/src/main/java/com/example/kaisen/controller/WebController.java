package com.example.kaisen.controller;

import com.example.kaisen.model.Service;
import com.example.kaisen.model.Ship;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;

@Controller
public class WebController{
    @Autowired
    private Service service;

    @Autowired
    private HttpSession httpSession;

    @GetMapping("GetPost")
    public String get(Model model){
        return "Shipset";
    }

    @GetMapping("/atack")
    public String get(int num1,int num2,Model model){
        List<Ship> list =new ArrayList<Ship>();
        for (int i=0;i<4;i++){
            Ship w= new Ship();
            w.setA(i);
            list.add(w);
        }
        model.addAttribute("list",list);
        return "atack";
    }

    @PostMapping("SetPost")
    public String post(Model model){
        return "atack";
    }

}
